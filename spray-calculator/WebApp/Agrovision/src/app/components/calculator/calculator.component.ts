import { Component, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field/field.model';
import { CalculatorModel } from 'src/app/models/calculator/calculator.model';
import { Spray_CalculatorHttpService } from 'src/app/services/http.spray_calculator.services';
import { calculationRequestModel } from 'src/app/models/calculator/calculationModel';
import { AgentModel } from 'src/app/models/agent/agent.model';
import { SprayModel } from 'src/app/models/spray/spray.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  calculatedFields: CalculatorModel[] = [];
  fields: FieldModel[] = [];
  selectedFields: CalculatorModel[] = [];
  totalWater: number;
  totalAgent: number;
  singleWater: number;
  singleAgent: number;
  sprays: SprayModel[] = [];
  agents: AgentModel[] = [];
  selectedAgent: AgentModel;
  selectedSpray: SprayModel;
  calculateDosageForm: FormGroup;
  constructor(private _spray_CalculatorHttpService: Spray_CalculatorHttpService, private fb: FormBuilder) {
    this.calculateDosageForm = this.fb.group({
      agenVolume: [0, Validators.min(0)],
      fieldSize: [0, Validators.min(0)],
      waterRate: [0, Validators.min(0)]
    });
  }

  ngOnInit(): void {
    this.GetActiveFields();
    this.GetActiveSpray();
    this.GetActiveAgents();
  }
  AddFields() {
    debugger;
    this.fields.forEach(z => {
      if (this.calculatedFields.find(x => x.fieldKey === z.fieldKey) === undefined) {
        this.calculatedFields.push(new CalculatorModel(z.fieldKey, z.description, z.fieldSize, 0, 0));
      }
    })
  }
  GetActiveAgents() {
    this._spray_CalculatorHttpService.GetActiveSprayingAgent().subscribe(res => {
      this.agents = res
    }, error => {

    });
  }
  GetActiveFields() {
    this._spray_CalculatorHttpService.GetActiveFields().subscribe(res => {
      this.fields = res;
      this.AddFields();
    }, error => {

    });
  }
  GetActiveSpray() {
    this._spray_CalculatorHttpService.GetActiveSpraying().subscribe(res => {
      this.sprays = res
    }, error => {

    });
  }
  CalculateSingle() {
    this.singleWater = 0;
    this.singleAgent = 0;
    this._spray_CalculatorHttpService.CalculateDosage(new calculationRequestModel(this.calculateDosageForm.value.agenVolume,
      this.calculateDosageForm.value.fieldSize, this.calculateDosageForm.value.waterRate)).subscribe(res => {
        this.singleWater = res.waterVolume;
        this.singleAgent = res.agenVolume;
      });

  }
  AddToCalculation() {
    this.totalWater = 0;
    this.totalAgent = 0;
    this.selectedFields.forEach(z => {
      if (z.water === 0 || z.agent === 0) {
        this._spray_CalculatorHttpService.CalculateDosage(new calculationRequestModel(this.selectedAgent.recomendedDosage,
          z.fieldSize, this.selectedSpray.sparyerVolumeL)).subscribe(res => {
            z.water = res.waterVolume;
            z.agent = res.agenVolume;
            this.totalWater = this.totalWater + z.water;
            this.totalAgent = this.totalAgent + z.agent;

          });
      } else {
        this.totalWater = this.totalWater + z.water;
        this.totalAgent = this.totalAgent + z.agent;
      }

    });

  }
}
