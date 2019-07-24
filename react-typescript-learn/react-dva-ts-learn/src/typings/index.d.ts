interface System {
  import<T = any>(module: string): Promise<T>;
}

declare const System: System;
