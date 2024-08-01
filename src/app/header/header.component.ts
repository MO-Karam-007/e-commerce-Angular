import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    mainMenu:string[] = ["Home", "Products", "Sale","New Arrival",'Contact',"Services"]

}