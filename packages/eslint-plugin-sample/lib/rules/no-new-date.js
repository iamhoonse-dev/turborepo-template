/**
 * @fileoverview Rule for detecting any usage of new Date() syntax.
 * @author username
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Rule for detecting any usage of new Date() syntax.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doNotUse: "Do not use new Date() syntax.",
    }, // Add messageId and message
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      NewExpression(node) {
        if (node.callee && node.callee.name === "Date") {
          context.report({
            node,
            messageId: "doNotUse",
          });
        }
      },
    };
  },
};
