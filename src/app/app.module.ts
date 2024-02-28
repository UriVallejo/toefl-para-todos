import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { routing, appRoutingProviders } from "./app.routes";
import { FormsModule, FormControl ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";


@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        RegisterComponent,
        FormsModule,ReactiveFormsModule
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        routing,
        CommonModule
        
    ],
    exports:[FormsModule],
    providers: [
        appRoutingProviders
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }