from django.db import models
from django.utils.text import slugify
# Create your models here.

class Category(models.Model):
  name = models.CharField(max_length=100)
  slug = models.SlugField(max_length=100, unique=True)
  description = models.TextField(blank=True)
  is_active = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  class Meta:
    verbose_name = "Category"
    verbose_name_plural = "Categories"
    ordering = ['name']
    
  def __str__(self):
    return self.name
  
  def save(self, *args, **kwargs):
    if not self.slug:
      self.slug = slugify(self.name)
    super().save(*args, **kwargs)
    
class Product(models.Model):
  TOBACCO = 'tobacco'
  ALCOHOL = 'alcohol'
  
  PRODUCT_TYPE_CHOICES = [
    (TOBACCO, 'Tobacco'),
    (ALCOHOL, 'Alcohol'),
  ]
  
  name = models.CharField(max_length=200)
  slug = models.SlugField(max_length=200, unique=True)
  category = models.ForeignKey(Category, related_name='products')
  product_type = models.CharField(max_length=10, choices=PRODUCT_TYPE_CHOICES)
  description = models.TextField(blank=True)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  stock = models.PositiveIntegerField(default=0)
  is_available = models.BooleanField(default=True)
  image = models.ImageField(upload_to='products/', blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  class Meta:
    ordering = ['-created_at']
    
  def __str__(self):
      return self.name
  
  def save(self, *args, **kwargs):
    if not self.slug:
      self.slug = slugify(self.name)
    super().save(*args, **kwargs)