import { TestBed } from '@angular/core/testing';

import { HonoWebsocketService } from './hono-websocket.service';

describe('HonoWebsocketService', () => {
  let service: HonoWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HonoWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
