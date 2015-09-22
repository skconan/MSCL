/*****************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the included
LICENSE.txt file for a copy of the full GNU General Public License.
*****************************************************************************/
#include "stdafx.h"

#include "BaseStation_Ping_v2.h"
#include "WirelessProtocol.h"
#include "mscl/MicroStrain/Wireless/Packets/WirelessPacket.h"

namespace mscl
{

	ByteStream BaseStation_Ping_v2::buildCommand()
	{
		//build the command ByteStream
		ByteStream cmd;
		cmd.append_uint8(0xAA);			//Start of Packet
		cmd.append_uint8(0x0E);			//Delivery Stop Flag
		cmd.append_uint8(0x30);			//App Data Type
		cmd.append_uint16(WirelessProtocol::BASE_STATION_ADDRESS);	//Base Station Address
		cmd.append_uint8(0x02);			//Payload length
		cmd.append_uint16(0x0001);		//Command ID

		//calculate the checksum of bytes 2-8
		uint16 checksum = cmd.calculateSimpleChecksum(1, 7);

		cmd.append_uint16(checksum);	//Checksum

		return cmd;
	}

	BaseStation_Ping_v2::Response::Response(std::weak_ptr<ResponseCollector> collector):
		ResponsePattern(collector)
	{
	}

	bool BaseStation_Ping_v2::Response::match(const WirelessPacket& packet)
	{
		WirelessPacket::Payload payload = packet.payload();

		//check the main bytes of the packet
		if(packet.deliveryStopFlags().toByte() != 0x07 ||	//delivery stop flag
		   packet.type() != 0x31 ||							//app data type
		   packet.nodeAddress() != WirelessProtocol::BASE_STATION_ADDRESS ||	//node address
		   payload.size() != 0x02 ||						//payload length
		   payload.read_uint16(0) != 0x0001
		   )
		{
			//failed to match some of the bytes
			return false;
		}

		//if we made it here, the packet matches the response pattern

		//the ping was a success
		m_success = true;

		//we have fully matched the response
		m_fullyMatched = true;

		//notify that the response was matched
		m_matchCondition.notify();

		return true;
	}
}