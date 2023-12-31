import { StaffInterface } from './../interface/staff-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffServiceService {
  private Changer = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) {}

  getAllStaff() {
    const token: any = localStorage.getItem('token');
    return this._HttpClient.get(
      `https://dentech.onrender.com/staff/all?page=1&limit=20`,
      {
        headers: { token },
      }
    );
  }
  getOneStaff(id: string) {
    const token: any = localStorage.getItem('token');
    return this._HttpClient.get(`https://dentech.onrender.com/staff/${id}`, {
      headers: { token },
    });
  }
  addStaff(staffData: StaffInterface) {
    const token: any = localStorage.getItem('token');
    return this._HttpClient.post(
      `https://dentech.onrender.com/staff/add`,
      staffData,
      {
        headers: { token },
      }
    );
  }
  updateStaff(updateData: any, id: any) {
    const token: any = localStorage.getItem('token');
    return this._HttpClient.patch(
      `https://dentech.onrender.com/staff/${id}`,
      updateData,
      {
        headers: { token },
      }
    );
  }
  deleteStaff(id: string) {
    const token: any = localStorage.getItem('token');
    return this._HttpClient.delete(`https://dentech.onrender.com/staff/${id}`, {
      headers: { token },
    });
  }
  getChanger() {
    return this.Changer.asObservable();
  }
  setChanger(number: number) {
    this.Changer.next(number);
  }
}
