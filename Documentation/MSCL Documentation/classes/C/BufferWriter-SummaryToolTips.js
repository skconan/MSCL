NDSummary.OnToolTipsLoaded("CClass:BufferWriter",{6792:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6792\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BufferWriter</div></div></div><div class=\"TTSummary\">Class used to interface with a DataBuffer and append data to it</div></div>",6794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6794\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BufferWriter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a BufferWriter object</div></div>",6796:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6796\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* m_buffer</div><div class=\"TTSummary\">The buffer to write to, at the specific position to start writing data</div></div>",6797:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6797\" class=\"NDPrototype NoParameterForm\">std::size_t m_size</div><div class=\"TTSummary\">The size available to write</div></div>",6798:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6798\" class=\"NDPrototype NoParameterForm\">std::size_t* m_writeOffset</div><div class=\"TTSummary\">A pointer to the current position to start writing in the buffer</div></div>",6800:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6800\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* buffer()</div><div class=\"TTSummary\">Gets the buffer to write to</div></div>",6801:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6801\" class=\"NDPrototype NoParameterForm\">std::size_t size()</div><div class=\"TTSummary\">Gets the size of the buffer available to write</div></div>",6802:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6802\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> commit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesAdded</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Commits a number of bytes that were added to the buffer by moving the current offset.</div></div>"});