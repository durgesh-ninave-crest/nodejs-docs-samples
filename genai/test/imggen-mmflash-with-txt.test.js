// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');

const projectId = process.env.CAIP_PROJECT_ID;
const sample = require('../image-generation/imggen-mmflash-with-txt.js');

describe('imggen-mmflash-with-txt', async () => {
  it('should generate images from a text prompt', async () => {
    const generatedFileNames = await sample.generateContent(projectId);
    assert(Array.isArray(generatedFileNames));
    assert(generatedFileNames.length > 0);
  });
});
