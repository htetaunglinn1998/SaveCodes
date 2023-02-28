export const noneValueFilter = values => {
    return _(values)
        .mapValues(o => {
            if (o !== "" && o !== "none") {
                return o;
            }
        })
        .omitBy(_.isUndefined)
        .omitBy(_.isNull)
        .omitBy(_.isNaN)
        .value();
};
