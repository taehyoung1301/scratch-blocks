'use strict';

goog.provide('Blockly.Blocks.object'); // "object" being the category.

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['object_alert'] = {
  /**
   * Block to alert.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OBJECT_ALERT,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.object,
      "extensions": ["colours_object", "shape_statement"]
    });
  }
};

Blockly.Blocks['object_runfunction'] = {
  /**
   * Block to alert.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OBJECT_RUNFUNCTION,
	  "args0": [
		{
			"type": "input_value",
			"name": "TARGETOBJECT"
		},
		{
			"type": "input_value",
			"name": "TARGETFUNCTION"
		}
      ],
      "category": Blockly.Categories.object,
      "extensions": ["colours_object", "shape_statement"]
    });
  }
};

Blockly.Blocks['object_adjacent_objects'] = {
  /**
   * Block to ask a question and wait
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OBJECT_ADJACENT_OBJECTS,
      "category": Blockly.Categories.object,
      "extensions": ["colours_object", "shape_statement"]
    });
  }
};

Blockly.Blocks['object_nearlist'] = {
  /**
   * Block to report answer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OBJECT_NEARLIST,
	   "args0": [
		{
			"type": "input_value",
			"name": "OBJECT_OPTION"
		}
      ],
      "category": Blockly.Categories.object,
      "checkboxInFlyout": true,
      "extensions": ["colours_object", "output_number"]
    });
  }
};

Blockly.Blocks['object_on_collision_totem'] = {
  /**
   * Block for "when I start as a clone" hat.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OBJECT_ONCOLLISION_TOTEM,
	   "args0": [
		{
			"type": "input_value",
			"name": "OBJECT_OPTION"
		}
      ],
      "category": Blockly.Categories.object,
      "extensions": ["colours_object", "shape_hat"]
    });
  }
};

Blockly.Blocks['object_on_collision'] = {
  /**
   * Block for "when I start as a clone" hat.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OBJECT_ONCOLLISION,
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT_OPTION",
          "options": [
            [Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF, '_myself_']
          ]
        }
      ],
      "category": Blockly.Categories.object,
      "extensions": ["colours_object", "shape_hat"]
    });
  }
};

Blockly.Blocks['object_nearlist_menu'] = {
  /**
   * Create-clone drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECT_OPTION",
          "options": [
            [Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF, '_myself_']
          ]
        }
      ],
      "extensions": ["colours_object", "output_string"]
    });
  }
};