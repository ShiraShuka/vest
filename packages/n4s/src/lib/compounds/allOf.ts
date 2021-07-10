import mapFirst from 'mapFirst';

import type { TRuleDetailedResult, TLazyRuleMethods } from 'ruleReturn';

export default function allOf(
  value: unknown,
  ...rules: TLazyRuleMethods[]
): TRuleDetailedResult {
  return (
    mapFirst(rules, (rule, breakout) => {
      const res = rule.run(value);
      if (!res.pass) {
        breakout(res);
      }
    }) ?? { pass: true }
  );
}
