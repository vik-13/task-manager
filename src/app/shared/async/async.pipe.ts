import {Pipe, OnDestroy, PipeTransform, ChangeDetectorRef, WrappedValue} from "@angular/core";
import {Observable} from "rxjs";

@Pipe({name: 'vuAsync', pure: false})
export class VuAsyncPipe implements OnDestroy, PipeTransform {
  private _latestValue: Object = null;
  private _latestReturnedValue: Object = null;

  private _subscription: any = null;
  private _obj: Observable<any> = null;

  constructor(private _ref: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    if (this._subscription) {
      this._dispose();
    }
  }

  transform(obj: Observable<any>): any {
    if (!this._obj) {
      if (obj) {
        this._subscribe(obj);
      }
      this._latestReturnedValue = this._latestValue;
      return this._latestValue;
    }

    if (obj !== this._obj) {
      this._dispose();
      return this.transform(obj as any);
    }

    if (this._latestValue === this._latestReturnedValue) {
      return this._latestReturnedValue;
    }

    this._latestReturnedValue = this._latestValue;
    return WrappedValue.wrap(this._latestValue);
  }

  private _subscribe(obj: Observable<any>): void {
    this._obj = obj;
    this._subscription = this._obj.subscribe({next: (value: Object) => this._updateLatestValue(obj, value)});
  }

  private _dispose(): void {
    this._subscription.unsubscribe();
    this._latestValue = null;
    this._latestReturnedValue = null;
    this._subscription = null;
    this._obj = null;
  }

  private _updateLatestValue(async: any, value: Object): void {
    if (async === this._obj) {
      this._latestValue = value;
      this._ref.markForCheck();
    }
  }
}
