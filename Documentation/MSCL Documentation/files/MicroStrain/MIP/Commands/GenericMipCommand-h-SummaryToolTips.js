NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/GenericMipCommand.h",{1638:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1638\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a GenericMipCommand.</div></div>",1640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1640\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse()</div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with default values.</div></div>",1641:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1641\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GenericMipCmdResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cmdName,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with the given parameters.</div></div>",1642:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1642\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GenericMipCmdResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td></td><td class=\"PName\">data&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ByteStream()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with a successful response.</div></div>",1643:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1643\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GenericMipCmdResponse ResponseFail(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td></td><td class=\"PName last\">errorState,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td></td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">cmdName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with a fail response.</div></div>",1645:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1645\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The &lt;ByteStream that holds the data received from the response, if any.</div></div>",1647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1647\" class=\"NDPrototype NoParameterForm\">ByteStream data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data that was received from the response, if any.</div></div>",1648:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1648\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCommand</div></div></div><div class=\"TTSummary\">Represents a base class for MIP commands</div></div>",1650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1650\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descSetByte,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdByte,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a MIP command, and returns a ByteStream containing the bytes to send</div></div>",1651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1651\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName\">commandId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a MIP command, and returns a ByteStream containing the bytes to send</div></div>",1652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1652\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a derived MIP command, and returns a ByteStream containing the bytes to send</div></div>",1653:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the MipTypes::Command</div></div>",1654:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1654\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the MIP command</div></div>",1656:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1656\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_ackNackResponse</div><div class=\"TTSummary\">Whether or not an ack/nack response field is expected</div></div>",1657:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1657\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_dataResponse</div><div class=\"TTSummary\">Whether or not a data response field is expected</div></div>",1658:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1658\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipTypes::Command m_command</div><div class=\"TTSummary\">The command enumeration</div></div>",1659:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1659\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The name of the command</div></div>",1660:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1660\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_fieldDataByte</div><div class=\"TTSummary\">The field data byte.</div></div>",1661:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1661\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse m_result</div><div class=\"TTSummary\">The GenericMipCmdResponse that holds the result of the GenericMipCommand</div></div>",1663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipTypes::Command for the MIP command</div></div>",1664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1664\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data field byte that should be received with the data field (if any)</div></div>",1665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> descSetByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the descriptor set byte for the MIP command</div></div>",1666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1666\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> cmdByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the command byte for the MIP command</div></div>",1667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1667\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldAckNackByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ack/nack byte that should be received with the ack/nack field</div></div>",1668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1668\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td></td><td class=\"PName\">MipTypes::Command&amp;,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName\">collector,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">fieldDataByte&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Response object</div></div>",1669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1669\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the MipDataField passed in matches the expected response pattern\'s bytes</div></div>",1670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1670\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_ackNack(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the MipDataField matches the ACK/NACK field for this command (if one is even expected)</div></div>",1671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1671\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match_data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the MipDataField matches the data field for this command (if one is even expected)</div></div>",1672:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1672\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> wait(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Waits for a certain amount of time for the response pattern to be matched</div></div>",1673:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1673\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse result()</div><div class=\"TTSummary\">Gets the GenericMipCmdResponse that holds the result of the response</div></div>"});