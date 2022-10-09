export default function multiClasses(...classes) {
  return classes.filter(e => typeof e === 'string').join(' ');
}
