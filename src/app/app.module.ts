import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { FilterdataPipe } from './filterdata.pipe';
import { AddtaskComponent } from './addtask/addtask.component';
import { FilterpriorityPipe } from './filterpriority.pipe';
import { FilterdatePipe } from './filterdate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EdittaskComponent } from './edittask/edittask.component';
import{HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { EdituserComponent } from './edituser/edituser.component';
import{MatDialogModule} from '@angular/material';
import { UserdialogComponent } from './dialogs/userdialog/userdialog.component';
import { ProjectdialogComponent } from './dialogs/projectdialog/projectdialog.component';
import { ParenttaskdialogComponent } from './dialogs/parenttaskdialog/parenttaskdialog.component'



@NgModule({
  declarations: [
    AppComponent,
    ViewtaskComponent,
    FilterdataPipe,
    AddtaskComponent,
    FilterpriorityPipe,
    FilterdatePipe,
    EdittaskComponent,
    AdduserComponent,
    AddprojectComponent,
    EdituserComponent,
    UserdialogComponent,
    ProjectdialogComponent,
    ParenttaskdialogComponent,
    
  
  ],
  providers:[
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: 'edit/:id' , component :EdittaskComponent},
      {path: 'add' , component :AddtaskComponent},
      {path: 'view' , component :ViewtaskComponent},
      {path: 'adduser' , component :AdduserComponent},
      {path: 'project' , component :AddprojectComponent},
      {path: 'editUser/:id' , component :EdituserComponent}
      
    ])
  ],
  entryComponents:
  [
    UserdialogComponent,
    ProjectdialogComponent,
    ParenttaskdialogComponent,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
 