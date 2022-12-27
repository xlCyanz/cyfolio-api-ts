import slugify from 'slugify';

module.exports = {
  async beforeCreate(event: any) {
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, {
        lower: true
      });
    }
  },
  async beforeUpdate(event: any) {
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, {
        lower: true
      });
    }
  },
};
