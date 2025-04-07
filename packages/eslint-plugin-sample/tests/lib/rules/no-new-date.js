/**
 * @fileoverview Rule for detecting any usage of new Date() syntax.
 * @author username
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-new-date"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-new-date", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "Date.now()",
    },
  ],

  invalid: [
    {
      code: "new Date().getTime()",
      errors: [{ messageId: "doNotUse", type: "NewExpression" }],
    },
  ],
});
