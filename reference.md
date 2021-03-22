# fix ruby terminal error
chcp 1252
https://stackoverflow.com/questions/22815542/rails4-unknown-encoding-name-cp720

# run jekyll locally 
bundle exec jekyll serve

# hide element in print page
add class name: no-print

# convert to HTML (for students/reviewers)
- go to chrome.
- save as html.
- go to html file and edit the following:
	- in html tag change sidebar-visible to sidebar-hidden
	- delete sidebar div.
	- delete google ads.
	- change stylesheets links to ../css/
	- change js links to ../js/
	- change links for icons to ../img/
	- replace http://127.0.0.1:4000/ds-100-ar/files/ with ../files/
	- now replace the rest of http://127.0.0.1:4000/ds-100-ar/chapter1/# links with #
	- now you should only have one more http://127.0.0.1:4000/ds-100-ar link for title. remove this href.
	- add MathJax.js.download to index_files/ then check source in last second line to ./index_files/MathJax.js.download
	- delete everything in top bar except #top and تغير لون الصفحة
	- change ./index_files/book.js.download to ../js/book.js.download

# Video to gif
- first record screen with OBS
- then convert video to gof using https://ezgif.com/video-to-gif/
- if you need to crop you can use the same site to crop/resize

# vscode shortcut for ```python/ruby
- file > preferences > user snippets > markdown.json:
	"Python code": {
		"prefix": "`p",
		"body": [
		  "```python",
		  "",
		  "```"
		],
		"description": "Python code"
	  },

	  "Ruby code": {
		"prefix": "`r",
		"body": [
		  "```ruby",
		  "",
		  "```"
		],
		"description": "Ruby code"
	  }

to use:
`p + ctrl+space
`r + ctrl+space

# MathJax
https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
http://blog.lostinmyterminal.com/webpages/2015/01/09/math-support-in-jekyll.html
http://zjuwhw.github.io/2017/06/04/MathJax.html

# مرجع خيارات صفحة مارك داون
title: text العنوان - سيضاف لعنوان الصفحة ايضاً
lesson: true/false عرض أو اخفاء الرقم قبل العنوان
show_title: true/false عرض أو اخفاء العنوان في الصفحة الرئيسية
show_index: true/false عرض الملف في الصفحة الرئيسة أو لا
add_line: true/false اضافة خط أسفل هذا العنوان
chapter_number: number اضافة رقم قبل الدرس
chapter_text: text رقم الفصل كتابة (مثال: الفصل الثاني) - سيضاف لعنوان الصفحة ايضاً
chapter_lessons: list inside list, قائمة داخلها قائمة، كل قائمة العنصر الأول فيها رقم الدرس والعنصر الثاني عنوانة
chapter_sublessons: list inside list, قائمة داخلها قائمة، تحتوي على الفصول داخل كل درس. يمكن ان تكون داخلها قائمة ثالثه، ولكن يجب ان يكون عنوان القائمه بأول قيمه.
appendix: اضافة كلمة مراجع قبل


# Markdown table generator
https://tableconvert.com/
https://jakebathman.github.io/Markdown-Table-Generator/
how to change to RTL:
	- Copy table to excel.
	- move columns from left to right. ( current far right column will be far left ... etc).
	- copy and paste to the site.
	- copy result of conversion to markdown file.

# for large tables

add tags `<div class="table-wrapper" markdown="block"></div>`

# مرجع المصطلحات 2

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