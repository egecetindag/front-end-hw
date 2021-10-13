import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private openModals: any[] = [];

    add(modal: any) {
        this.openModals.push(modal);
    }

    remove(id: string) {
        this.openModals = this.openModals.filter(x => x.id !== id);
    }

    open(id: string) {
        const modal = this.openModals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        const modal = this.openModals.find(x => x.id === id);
        modal.close();
    }
}