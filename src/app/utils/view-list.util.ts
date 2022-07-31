export class ViewListUtil {
  static setDataOptions(items: any[], role: 'admin' | 'user') {
    return items.map((item) => {
      return {
        ...item,
        options: role === 'admin' ? ['edit', 'delete'] : ['view'],
      };
    });
  }
}
