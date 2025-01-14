import optionalFunctionValue from 'optionalFunctionValue';
import { Stringable } from 'utilityTypes';

export default function invariant(
  condition: any,
  // eslint-disable-next-line @typescript-eslint/ban-types
  message?: String | Stringable
): asserts condition {
  if (condition) {
    return;
  }

  // If message is a string object (rather than string literal)
  // Throw the value directly as a string
  // Alternatively, throw an error with the message
  throw message instanceof String
    ? message.valueOf()
    : new Error(message ? optionalFunctionValue(message) : message);
}
