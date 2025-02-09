import mapFirst from 'mapFirst';

import type { Lazy } from 'genEnforceLazy';
import * as ruleReturn from 'ruleReturn';
import type { RuleDetailedResult } from 'ruleReturn';
import runLazyRule from 'runLazyRule';

export function anyOf(value: unknown, ...rules: Lazy[]): RuleDetailedResult {
  return ruleReturn.defaultToFailing(
    mapFirst(rules, (rule, breakout) => {
      const res = runLazyRule(rule, value);
      if (res.pass) {
        breakout(res);
      }
    })
  );
}
