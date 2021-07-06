import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { GraficaBarrasComponent } from './components/grafica-barras/grafica-barras.component';
import { GraficaTortaComponent } from './components/grafica-torta/grafica-torta.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { MatMenuModule } from '@angular/material/menu';
import { LoginGuardian } from './guardians/login.guardian.service';
import { loginService } from './services/login.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    ModalInfoComponent,
    GraficaBarrasComponent,
    GraficaTortaComponent,
    CabeceroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    NgxChartsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [DataService, LoginGuardian, loginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
