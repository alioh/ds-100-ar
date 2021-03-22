---
title: المكاتب المستخدمة في الكتاب ودوالها
show_title: true
chapter_text: ملحق
show_index: true
chapter_number: 4
add_line: true
chapter_lessons: [[0, 'مقدمة'], [1, 'Pandas'], [2, 'Seaborn'], [3, 'matplotlib'], [4, 'scikit-learn']]
chapter_sublessons: [
 [],
 [],
 [],
 [['أنواع الرسومات'], ['إضافة الرسومات']],
 [['النماذج واختيارها'], ['العمل مع النماذج']]
 ]
layout: default
---

## مقدمة

هذا الملحق يحتوي على جداول لدوال المكتبات المستخدمة في هذا الكتاب `pandas`، `seaborn`، `matplotlib` و `scikit-learn`. هدف هذه الجداول أن تكون ملخص ومرجع مفيد للدوال الأكثر استخداماً في هذا الكتاب.

لكل مكتبة، قمنا بإضافة الدالة، الفصل الذي استخدمت في الدالة أول مرة، وشرح بسيط عن طريقة عملها.


## Pandas

| الدالة | الفصل | الوصف |
| :---: | :---: | --- |
| [`pd.DataFrame(data)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | إنشاء DataFrame من مصفوفة أو قاموس ثنائي الأبعاد `data` |
| [`pd.read_csv(filepath)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | قراءة ملف من النوع CSV في المسار `filepath` كـ DataFrame |
| [`pd.DataFrame.head(n=5)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html)<br/>[`pd.Series.head(n=5)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.head.html) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | إظهار أول `n` أسطر في مصفوفة أحادية البعد أو DataFrame |
| `pd.DataFrame.index`<br/>`pd.DataFrame.columns` | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | إظهار الأرقام التسلسلية للـDataFrame و أسماء الأعمدة |
| [`pd.DataFrame.describe()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.describe.html)<br/>[`pd.Series.describe()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.describe.html) | [التحليل الاستكشافي للبيانات](/ds-100-ar/chapter4) | عرض معلومات إحصائية عن مصفوفة أحادية البعد أو الـDataFrame |
| [`pd.Series.unique()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.unique.html) | [التحليل الاستكشافي للبيانات](/ds-100-ar/chapter4) | عرض القيم الفريدة (الغير مكررة) في مصفوفة أحادية البعد |
| [`pd.Series.value_counts()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.value_counts.html) | [التحليل الاستكشافي للبيانات](/ds-100-ar/chapter4) | عرض عدد مرات تكرار كل قيمة فريدة (غير مكررة) تظهر في المصفوفة أحادية البعد |
| `df[col]` | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | من الـDataFrame `df`، أظهر العامود `col` كمصفوفة أحادية البعد |
| `df[[col]]` | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | من الـDataFrame `df`، أظهر العامود `col` كـDataFrame |
| `df.loc[row, col]` | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | من الـDataFrame `df`، أظهر لنا السطر ذو الاسم `row` واسم عموده `col`؛ يمكن تبديل `row` بمصفوفة أحادية البعد بقيم منطقية (True/False) |
| `df.iloc[row, col]` | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | من الـDataFrame `df`، أظهر لنا السطر ذو الرقم التسلسلي `row` واسم عموده `col`؛ يمكن تبديل `row` بمصفوفة أحادية البعد بقيم منطقية (True/False) |
| [`pd.DataFrame.isnull()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.isnull.html)<br/>[`pd.Series.isnull()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.isnull.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | إظهار القيم المفقودة في مصفوفة أحادية البعد أو DataFrame |
| [`pd.DataFrame.fillna(value)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.fillna.html)<br/>[`pd.Series.fillna(value)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.fillna.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | تعبئة القيم المفقودة في المصفوفة أحادية البعد أو الـDataFrame بالقيمة في المتغير `value` |
| [`pd.DataFrame.dropna(axis)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.dropna.html)<br/>[`pd.Series.dropna()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.dropna.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | حذف الأسطر أو الأعمدة |
| [`pd.DataFrame.drop(labels, axis)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.drop.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | حذف الأسطر أو الأعمدة التي اسمها `labels` من الـDataFrame من المحور `axis` |
| [`pd.DataFrame.rename()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.rename.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | إعادة تسمية الأسطر أو الأعمدة في DataFrame |
| [`pd.DataFrame.replace(to_replace, value)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.replace.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | تبديل القيمة `to_replace` بالقيمة `value` في الـDataFrame |
| [`pd.DataFrame.reset_index(drop=False)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.reset_index.html) | [تنظيف البيانات](/ds-100-ar/chapter5) | إعادة تعيين الأرقام التسلسلية في الـDataFrame؛ تلقائيًا، يتم حفظ الأرقام السابقة في عمود جديد إلا إذا تم وضع المتغير `drop=True` |
| [`pd.DataFrame.sort_values(by, ascending=True)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.sort_values.html) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | ترتيب الـDataFrame بناءًا على العمود في المتغير `by`، الترتيب التلقائي تصاعدي |
| [`pd.DataFrame.groupby(by)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.groupby.html) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | إنشاء كائن GroupBy يحتوي على DataFrame مُجَمعة بناءًا على العامود في المتغير `by` |
| [`GroupBy.<function>`](https://pandas.pydata.org/pandas-docs/stable/api.html#id41) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | تطبيق الدالة `<function>` لكل مجموعة في الكائن `GroupBy` ؛ مثال: [`mean()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.core.groupby.GroupBy.mean.html)، [`count()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.core.groupby.GroupBy.count.html) |
| [`pd.Series.<function>`](https://pandas.pydata.org/pandas-docs/stable/api.html#computations-descriptive-stats) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | تطبيق الدالة `<function>` على مصفوفة أرقام أحادية البعد؛ مثال: [`mean()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.mean.html)، [`max()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.max.html), [`median()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.median.html) |
| [`pd.Series.str.<function>`](https://pandas.pydata.org/pandas-docs/stable/api.html#string-handling) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | تطبيق الدالة `<function>` على مصفوفة نصية أحادية البعد؛ مثال: [`len()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.str.len.html)، [`lower()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.str.lower.html), [`split()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.str.split.html) |
| [`pd.Series.dt.<property>`](https://pandas.pydata.org/pandas-docs/stable/api.html#datetimelike-properties) | [البيانات المجدولة ومكتبة بانداز](/ds-100-ar/chapter3) | استخراج القيمة `<property>` من مصفوفة تاريخ ووقت أحادية البعد؛ مثال: [`year`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.dt.year.html)، [`month`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.dt.month.html), [`date`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.dt.date.html) |
| [`pd.get_dummies(columns, drop_first=False)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.get_dummies.html) | --- | تحويل القيم الاسمية في العمود `columns` لقيم وهمية Dummy؛ الوضع التلقائي بإبقاء جميع القيم إلا إذا تم تحديد المتغير `drop_first=True` |
| [`pd.merge(left, right, how, on)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.merge.html) | [التحليل الاستكشافي للبيانات](/ds-100-ar/chapter4) / [قواعد البيانات العلائقية و SQL](/ds-100-ar/chapter9) | جمع اثنين DataFrame في المتغيرات `left` و `right` معاً باستخدام العمود في المتغير `on`؛ بناءًا على طريقة الجمع في المتغير `how` |
| [`pd.read_sql(sql, con)`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_sql.html) | [قواعد البيانات العلائقية و SQL](/ds-100-ar/chapter9) | قراءة أمر SQL في المتغير `sql` في قاعدة البيانات المتصل بها في `con`، تعود النتيجة كـDataFrame |



## Seaborn

| الدالة | الفصل | الوصف |
| :---: | :---: | --- |
| [`sns.lmplot(x, y, data, fit_reg=True)`](https://seaborn.pydata.org/generated/seaborn.lmplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط تشتت لـ `x` و `y` من الـDataFrame `data`، وبشكل تلقائي يظهر لنا خط انحدار المربعات الصغرى |
| [`sns.distplot(a, kde=True)`](https://seaborn.pydata.org/generated/seaborn.distplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط المدرج التكراري لـ `a`، وبشكل تلقائي يظهر لنا تقدير للكثافة |
| [`sns.barplot(x, y, hue=None, data, ci=95)`](https://seaborn.pydata.org/generated/seaborn.barplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط شريطي لـ `x` و `y` من الـDataFrame `data`، يتم تحليلها اختيارياً بالخيار في المتغير `hue`، وبشكل تلقائي رسم خط ثقة بنسبة 95% (والذي يمكن عدم رسمه بتحديد الخيار `ci=None`) |
| [`sns.countplot(x, hue=None, data)`](https://seaborn.pydata.org/generated/seaborn.countplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط شريطي لمجموع القيم الفريدة في المتغير `x` في الـDataFrame `data`، يتم تحليلها اختيارياً بناءًا على المتغير النوعي `hue` |
| [`sns.boxplot(x=None, y, data)`](https://seaborn.pydata.org/generated/seaborn.boxplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط صندوق لـ `y`، يتم تحليله اختيارياً بناءًا على المتغير النوعي `x`، من الـDataFrame `data` |
| [`sns.kdeplot(x, y=None)`](https://seaborn.pydata.org/generated/seaborn.kdeplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إذا كانت `y=None`، أنشأ مخطط كثافة بمتغير واحد `x`؛ إذا تم تحديد `y`، أنشأ مخطط كثافة ثنائي |
| [`sns.jointplot(x, y, data)`](https://seaborn.pydata.org/generated/seaborn.jointplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | جمع مخطط التشتت الثنائي المكون من `x` و `y` من الـDataFrame `data`، مع مخطط كثافة ذو المتغير الواحد يتم رسم خط كل متغير في المحاور |
| [`sns.violinplot(x=None, y, data)`](https://seaborn.pydata.org/generated/seaborn.violinplot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | جمع وأنشاء مخطط الصندوق و مخطط كثافة للمتغير `y`، يتم تحليله اختيارياً بناءًا على المتغير النوعي `x`، من الـDataFrame `data`|


## matplotlib

### أنواع الرسومات

| الدالة | الفصل | الوصف |
| :---: | :---: | --- |
| [`plt.scatter(x, y)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.scatter.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط تشتت لـ `x` و `y` |
| [`plt.plot(x, y)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط خطي لـ `x` و `y` |
| [`plt.hist(x, bins=None)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط المدرج التكراري لـ `x`. المتغير `bins` يمكن أن يكون رقم أو أرقام تسلسلية |
| [`plt.bar(x, height)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.bar.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء مخطط شريطي. `x` تحدد تنسيق الأشرطة، و `height` تحدد طول الأشرطة |
| [`plt.axvline(x=0)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.axvline.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء خط عمودي على القيمة المحددة في المتغير `x` |
| [`plt.axhline(y=0)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.axhline.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء خط أفقي على القيمة المحددة في المتغير `x` |

### إضافة الرسومات

| الدالة | الفصل | الوصف |
| :---: | :---: | --- |
| [`%matplotlib inline`](http://ipython.readthedocs.io/en/stable/interactive/plotting.html) | [تصوير البيانات](/ds-100-ar/chapter6) | السماح بالرسوم البيانية أن تظهر في نفس الصفحة بدلاً من صفحة منفصلة |
| [`plt.figure(figsize=(3, 5))`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء رسم بياني بعرض 3 وطول 5 إنش |
| [`plt.xlim(xmin, xmax)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.xlim.html) | [تصوير البيانات](/ds-100-ar/chapter6) | تحديد حد للمحور x-limits |
| [`plt.xlabel(label)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.xlabel.html) | [تصوير البيانات](/ds-100-ar/chapter6) | تحديد عنوان للمحور |
| [`plt.title(label)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.title.html) | [تصوير البيانات](/ds-100-ar/chapter6) | تحديد عنوان للمحاور / الرسم البياني |
| [`plt.legend(x, height)`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إضافة عنوان تفصيلي / تفسيري للرسم البياني |
| [`fig, ax = plt.subplots()`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html) | [تصوير البيانات](/ds-100-ar/chapter6) | إنشاء رسم بياني ومجموعة من الرسوم البيانية داخلة |
| [`plt.show()`](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.show.html) | [تصوير البيانات](/ds-100-ar/chapter6) | عرض الرسم البياني |


## scikit-learn


### النماذج واختيارها

| الإستدعاء | الدالة | الفصل | الوصف |
| :---: | :---: | :---: | --- |
| `sklearn.model_selection` | [`train_test_split(*arrays, test_size=0.2)`](http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | ينتج عنها قسمين من المصفوفة المرسولة في الدالة، نصف فيه 0.8 من المصفوفة والنصف الآخر 0.2 |
| `sklearn.linear_model` | [`LinearRegression()`](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | إنشاء نموذج الانحدار الخطي للمربعات الصغرى |
| `sklearn.linear_model` | [`LassoCV()`](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | إنشاء نموذج خطي Lasso (الضبط L1) يختار أفضل المتغيرات باستخدام التحقق المتقاطع |
| `sklearn.linear_model` | [`RidgeCV()`](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | إنشاء نموذج خطي Ridge (الضبط L2) يختار أفضل المتغيرات باستخدام التحقق المتقاطع |
| `sklearn.linear_model` | [`ElasticNetCV()`](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | إنشاء نموذج خطي ElasticNet (الضبط L1 و L2) يختار أفضل المتغيرات باستخدام التحقق المتقاطع |
| `sklearn.linear_model` | [`LogisticRegression()`](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | إنشاء نموذج انحدار لوجستي |
| `sklearn.linear_model` | [`LogisticRegressionCV()`](http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html) | [النماذج والتوقعات](/ds-100-ar/chapter10) | إنشاء نموذج انحدار لوجستي يختار أفضل المتغيرات باستخدام التحقق المتقاطع |


### العمل مع النماذج

| الدالة | الفصل | الوصف |
| :---: | :---: | --- |
| `model.fit(X, y)` | [النماذج والتوقعات](/ds-100-ar/chapter10) | ضبط النموذج باستخدام الخصائص `X` والنتائج `y` |
| `model.predict(X)` | [النماذج والتوقعات](/ds-100-ar/chapter10) | إيجاد التوقعات لـ `X` باستخدام النموذج `model` |
| `model.score(X, y)` | [النماذج والتوقعات](/ds-100-ar/chapter10) | إيجاد دقة النتائج للتوقعات القيم `X` مقارنة بالنتائج الصحيحة في `y` |



<br>
<br>
<br>
<br>
<strong style='float:left'>إنتهى</strong>