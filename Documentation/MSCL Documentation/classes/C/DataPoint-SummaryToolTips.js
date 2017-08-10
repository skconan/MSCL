NDSummary.OnToolTipsLoaded("CClass:DataPoint",{5745:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5745\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataPoint</div></div></div><div class=\"TTSummary\">Base class representing common functionality between Wireless and Inertial data points</div></div>",5747:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available channel properties that can be stored with the WirelessDataPoint.</div></div>",5751:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of ChannelPropertyId to Value pairs.</div></div>",5753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5753\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelProperties&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">channelProperties&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ChannelProperties()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DataPoint object</div></div>",5755:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5755\" class=\"NDPrototype NoParameterForm\">ChannelProperties m_channelProperties</div><div class=\"TTSummary\">The ChannelProperties associated with the data point (if any).</div></div>",5757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5757\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Value&amp; channelProperty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelPropertyId&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the channel property for the specified ChannelPropertyId associated with the data point.</div></div>",5758:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5758\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Vector as_Vector() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Vector object</div></div>",5759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5759\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Matrix as_Matrix() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Matrix object</div></div>",5760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5760\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp as_Timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Timestamp object</div></div>",5761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5761\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes as_Bytes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a Bytes object (vector of uint8).</div></div>",5762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5762\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> StructuralHealth as_StructuralHealth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a StructuralHealth object.</div></div>",5763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5763\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> RfSweep as_RfSweep() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as an RfSweep.</div></div>",5764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5764\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> as_string() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data value as a string</div></div>"});