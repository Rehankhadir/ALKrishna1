import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(TaskComponent) taskComponent!: TaskComponent;

  startMigration() {
    this.taskComponent.startMigration();
  }
}
