function abc<T>(a: T, b?: T, c?: T): string | T {
  if (!b || !c) {
    return "Unknown"
  }
  
  return a
}

abc(1, 2)