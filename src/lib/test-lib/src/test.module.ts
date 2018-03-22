import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServiceService } from './test-service.service';

@NgModule({
  imports: [CommonModule],
  providers: [TestServiceService],
})
export class TestModule {}
