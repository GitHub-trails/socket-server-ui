import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoWebsocketComponent } from './hono-websocket.component';

describe('HonoWebsocketComponent', () => {
  let component: HonoWebsocketComponent;
  let fixture: ComponentFixture<HonoWebsocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonoWebsocketComponent]
    });
    fixture = TestBed.createComponent(HonoWebsocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
