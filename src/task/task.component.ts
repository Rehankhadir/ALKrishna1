import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [NgIf,NgClass]
})
export class TaskComponent implements OnInit {
    isVisible = false;
    isContentVisible = false;
    progress = 0;
    intervalId: any;
    showToast = false;
  
    ngOnInit(): void {}
    startMigration() {
        this.isVisible = true;
        this.progress = 0;
        this.isContentVisible = true;
        
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
        
        this.intervalId = setInterval(() => {
          if (this.progress < 100) {
            this.progress++;
          } else {
            clearInterval(this.intervalId);
            this.isVisible = false;
            this.showToast = true;
          }
        }, 30);
      }
    
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    
      toggleContent() {
        this.isContentVisible = !this.isContentVisible;
      }
      closeToast() {
        this.showToast = false;
      }
    }