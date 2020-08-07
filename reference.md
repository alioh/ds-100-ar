# code-result
you have to add `br` tag after it

# fix ruby terminal error
chcp 1252
https://stackoverflow.com/questions/22815542/rails4-unknown-encoding-name-cp720

# run jekyll locally 
bundle exec jekyll serve

# MathJax
https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
http://blog.lostinmyterminal.com/webpages/2015/01/09/math-support-in-jekyll.html
http://zjuwhw.github.io/2017/06/04/MathJax.html

# مرجع خيارات صفحة مارك داون
title: text العنوان
lesson: true/false عرض أو اخفاء الرقم قبل العنوان
show_title: true/false عرض أو اخفاء العنوان في الصفحة الرئيسية
add_line: true/false اضافة خط أسفل هذا العنوان
chapter_start: true/false اضافة عنوان للفصل
chapter_name: text عنوان الفصل
chapter_number: number اضافة رقم قبل الدرس
chapter_text: text رقم الفصل كتابة (مثال: الفصل الثاني)
chapter_lessons: list inside list, قائمة داخلها قائمة، كل قائمة العنصر الأول فيها رقم الدرس والعنصر الثاني عنوانة

# مرجع المصطلحات

|         المصطلح الإنجليزي         |               العربي                |               2العربي                |
|:---------------------------------:|:-----------------------------------:|:-----------------------------------:|
|              dataset              |   حزمة البيانات، مجموعة البيانات    |              بيانات          |
|               label               |     العلامة، صنف، تصنيف، الفئة      |        معلمة / مصنفة          |
|          positive label           |           الصنف الإيجابي            |               معلمة إيجابي     |
|          negative label           |            الصنف السلبي             |             معلمة سلبي         |
|              sample               |                مثال                 |               مثال              |
|          labeled sample           |     مثال محدد، مصنف، مثال مُرقم      |       أمثلة معلمة / مصنفة      |
|              vector               |                متجه                 |             مصفوفه           |
|              feature              |             خاصية، ميزة             |             خصائص            |
|          feature vector           |      متجه الخواص، متجه الميزه       |        مصفوفة الخصائص      |
|        supervised learning        |   التعلم باشراف، التعلم الإرشادي    |       التعلم الموجَّه        |
|     semi-supervised learning      |     التعليم شبه الخاضع للإشراف      |        التعلم الشبه موجَّه      |
|       unsupervised learning       | التعلم دون إشراف، التعلم اللاإرشادي |      التعلم غير الموجَّه         |
|            clustering             |       التجميع، مشكلة التجميع        |         التجميع          |
|     dimensionality reduction      |     تقليص الأبعاد، خفض الأبعاد      |          تقليص الأبعاد         |
|         outlier detection         |             كشف المُختلف             |       كشف الشواذ           |
|      reinforcement learning       |           التعلم التعزيزي           |        التعلم التعزيزي      |
|               state               |                حالة                 |             حالة            |
|              actions              |                إجراء                |          الفعل             |
|            environment            |                بيئة                 |            بيئة التعلم      |
|              policy               |                سياسة                |             سياسة           |
|      expected average reward      |       متوسط المكافأة المتوقعة       |       متوسط المكافأة المتوقعة       |
|           bag of words            |           كيس من الكلمات            |       كيس (مجموعة) من الكلمات   |
|             dimension             |                 بُعد                 |               بُعد              |
|      Support Vector Machines      |        خوارزمية متجهات الدعم        |      آلة المتجهات الداعمة       |
|           optimization            |                تحسين                |             تحسين           |
|       optimization problem        |             مشكلة تحسين             |           مشكلة تحسين           |
|            Hyperplane             |     فضاء الأبعاد، الفضاء البعدي     |         خط فاصل (عازل)          |
|          generalization           |                تعميم                |               تعميم             |
|             minimize              |            تقليل، تقليص             |               تقليل              |
|             maximize              |       تكبير، حقق الحد الأقصى        |               تكبير          |
|         statistical model         |            نموذج إحصائي             |          نموذج إحصائي              |
|               model               |                نموذج                |               نموذج              |
|             training              |                تدريب                |                تدريب             |
|         decision boundary         |              حد القرار              |          حد/خط القرار            |
|          separating line          |             الخط الفاصل             |            الخط الفاصل           |
|               class               |                 صنف                 |             صنف             |
|               noise               |          اللاتماثل، ضوضاء           |        غير مرغوب فيها             |
|          hyperparameter           |                مقياس                |            المتغيرات            |
|      penalty hyperparameters      |            مقاييس جزائية            |           متغيرات جزائية            |
|      classification problem       |             مشكلة تصنيف             |          مشكلة تصنيف          |
|        regression problem         |    مشكلة إرتداد (تحليل الإنحدار)    |          مشكلة إنحدار         |
| classification learning algorithm |        خوارزمية تعلم تصنيفية        |    خوارزمية تعلم تصنيفية        |
|         loss function             |                                       |           دالة الخسارة        |
|           Binary Loss             |                                       |           الخسارة الثنائية    |
|           Empirical Risk             |                                       |           الخطر التجريبي    |
|          Squared Error Loss       |                                       |         دالة الخسارة المربعه                  |
|          quadratic loss           |                                       |              الخسارة التربيعية                |
|          Overfitting              |                                      |        فرط التخصيص            |
|          gradient descent         |                                      |           نزول إشتقاقي            |
|          threshold                |                                      |           قيمة الفصل               |
|       Logistic Regression         |                                      |          الإنحدار اللوجستي          |
|       Linear Regression         |                                      |          الإنحدار الخطي          |
|       likelihood function         |                                   |            دالة الإحتمالية                       |
|       maximum likelihood          |                                      |               الإحتمالية الكبرى                |
|       Decision Tree           |                                          |         شجرة القرار                    |
|       Log-likelihood          |                                        |           لوغارثمية الإحتمال                         |
|       Entropy                 |                                       |           الإنتروبيا              |
|       Backtracking            |                                       |           التراجع           |
|       Hinge loss              |                                       |         الخسارة المفصلية      |
|       Kernel Trick            |                                       |           حيلة النواة         |
|       Normalization           |                                       |           تسوية               |
|       Coefficient             |                                       |             معامل                         |