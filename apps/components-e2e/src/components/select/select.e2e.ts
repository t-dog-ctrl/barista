/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { select, overlayPane, option2, option3, option4 } from './select.po';
import { resetWindowSizeToDefault, waitForAngular } from '../../utils';

fixture('Select')
  .page('http://localhost:4200/select')
  .beforeEach(async () => {
    await resetWindowSizeToDefault();
    await waitForAngular();
  });

test('should propagate attribute to overlay', async (testController: TestController) => {
  await testController
    .click(select, { speed: 0.3 })
    .expect(overlayPane.getAttribute('dt-ui-test-id'))
    .contains('select-overlay');
});

test('should highlight the correct option after navigating using mouse and keyboard', async (testController: TestController) => {
  await testController
    .click(select, { speed: 0.5 })
    .pressKey('down')
    .expect(option2.classNames)
    .contains('dt-option-active')
    .hover(option3)
    .expect(option2.classNames)
    .notContains('dt-option-active')
    .expect(option3.classNames)
    .contains('dt-option-active')
    .pressKey('down')
    .expect(option3.classNames)
    .notContains('dt-option-active')
    .expect(option4.classNames)
    .contains('dt-option-active');
});
