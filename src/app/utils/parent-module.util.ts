export class ParentModuleUtil {
  static getOptions(items: any[], role?: string) {
    return items.map((item) => {
      return { ...item, options: ['edit', 'delete'] };
    });
  }
}
