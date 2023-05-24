import { Component } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { UnsubscribeComponentComponent } from 'src/app/unsubscribe-component/unsubscribe-component.component';
import { Consumer } from '../consumer';
 
@Component({
  selector: 'crm-consumer-liste',
  templateUrl: './consumer-liste.component.html',
  styleUrls: ['./consumer-liste.component.scss'],
})
export class ConsumerListeComponent  extends UnsubscribeComponentComponent{
  protected datasource : Array<Consumer>=[];
  protected displayedColumns = [  'civilite', 'prenom', 'nom', 'email', 'telephone', 'actions']; 
  constructor(private consumerService: ConsumerService) { 
    super(); 
  }

  ngOnInit(): void {
    this.findAll();
   
  }


  private findAll():void {
    this.consumerService.getAllConsummers().subscribe(
      (consumers) => {
        this.datasource = consumers;
        console.log(consumers);
      }
    );
  }


public addSomeOne(element:Consumer):void{
 /*  this.datasource.push(element); */
 this.consumerService.createConsummer(element).subscribe( (res)=>{
  this.findAll();
  console.log(res);
 });   
}
protected deleteSomeOne(element:Consumer):void{
  this.consumerService.deleteConsummer(element.id).subscribe( (res)=>{
    this.findAll();
   });   
}
protected changerLapersonne(element:Consumer):void{
  this.consumerService.updateConsummer(element).subscribe( (res)=>{
    this.findAll();
   });   
}
}





