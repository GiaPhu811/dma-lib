import AesirxApiInstance from '../../gateway/Instance';
import BaseRoute from '../../Abstract/BaseRoute';
import { INTEGRATION_CONFIGS } from '../../Constant/Constant';

class CmsCategoriesRoute extends BaseRoute {
  option = '';

  getList = (filters) => {
    const buildFilters = this.createFilters(filters);
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).get(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_metaverse_categories_63',
        ...buildFilters,
      })
    );
  };
  getDetail = (id = 0) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).get(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_metaverse_categories_63',
        id: id,
      })
    );
  };

  create = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).post(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_metaverse_categories_63',
      }),
      data
    );
  };
  update = (data) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).put(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_metaverse_categories_63',
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };
  delete = (id) => {
    return AesirxApiInstance(INTEGRATION_CONFIGS.MCMS).delete(
      this.createRequestURL({
        option: 'reditem',
        view: 'category_with_org_check_metaverse_categories_63',
      }),
      {
        data: { id: id },
      }
    );
  };

  createFilters = (filters) => {
    let buildFilter = {};
    for (const [key, value] of Object.entries(filters)) {
      if (typeof value === 'object') {
        switch (value.type) {
          case 'custom_fields':
            buildFilter['filter[' + value.type + '][' + key + '][]'] = value.value;
            break;
          case 'filter':
            buildFilter['filter[' + key + ']'] = value.value;
            break;
          default:
            break;
        }
      } else {
        buildFilter[key] = value;
      }
    }

    return buildFilter;
  };
}

export default CmsCategoriesRoute;
