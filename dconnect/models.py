from django.db import models

# Create your models here.

class DrinkRecord(models.Model):
	collector = models.ForeignKey(User)
	collectee = models.TextField()
	# latitude = models.DecimalField(max_digits=9, decimal_places=6)
	# longitude = models.DecimalField(max_digits=9, decimal_places=6)
	location = models.GeopositionField()
	fav_drink = models.TextField()
	date_recorded = models.DateTimeField(auto_now_add=True)

