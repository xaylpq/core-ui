import GroupModel from '../models/GroupModel';
import SelectStateModel from '../models/SelectStateModel';
import CheckboxModel from '../models/CheckboxModel';
import meta from '../meta';

export default Backbone.Collection.extend({
    model(attrs, options) {
        switch (attrs.type) {
            case meta.toolbarItemType.GROUP:
                return new GroupModel(attrs, options);
            case meta.toolbarItemType.SELECTSTATE:
                return new SelectStateModel(attrs, options);
            case meta.toolbarItemType.CHECKBOX:
                return new CheckboxModel(attrs, options);
            default:
                return new Backbone.Model(attrs, options);
        }
    }
});
