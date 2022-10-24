#!/usr/bin/env node

import { name, comparisonYesNo } from '../src/index.js';
import { solutionPrime } from '../src/games/prime.js';

solutionPrime(name, comparisonYesNo);