/**
 * This is the doc comment for index.ts
 *
 * Specify this is a module comment and rename it to Index:
 * @module Index
 */

/**
 * @author Twist
 * @param delayMs 延迟时间(毫秒)
 * @returns Promise
 */
export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

/**
 * @author Twist
 * @returns 'Hellow World'
 */
export const hellowWorld = async (): Promise<string> => {
  await delayMillis(1000)
  return 'Hellow World'
}
