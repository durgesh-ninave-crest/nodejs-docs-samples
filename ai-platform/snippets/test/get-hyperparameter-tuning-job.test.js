/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');

const cp = require('child_process');
const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const tuningJobId = '2216298782247616512';
const project = process.env.CAIP_PROJECT_ID;
const location = 'us-central1';

describe('AI platform get hyperparameter tuning job', () => {
  it('should get the specified hyperparameter tuning job', async () => {
    const stdout = execSync(
      `node ./get-hyperparameter-tuning-job.js ${tuningJobId} ${project} ${location}`
    );
    assert.match(stdout, /Get hyperparameter tuning job response/);
  });
});
