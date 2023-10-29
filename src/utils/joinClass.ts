export default function joinClass(...classes: Array<any>): string {
  return classes.filter((item: any): boolean => Boolean(item)).join(" ");
}
