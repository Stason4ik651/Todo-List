import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthService } from './services/auth.service';
import { UnsavedChangesGuard } from './shared/guards/unsaved-changes.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserProfileComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputNumberModule,
    FormsModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    FileUploadModule,
    RatingModule,
    TagModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ChipsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RippleModule,
    InputTextareaModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    AuthService,
    UnsavedChangesGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
