from django.db import models
from django.contrib.auth.models import AbstractUser
import decimal
import datetime


# Create your models here.
class User(AbstractUser):
    id = models.CharField(max_length=16)

    @property
    def user_id(self):
        return self.id

    @property
    def username(self):
        return self.username

    @property
    def email(self):
        return self.email

    @property
    def first_name(self):
        return self.first_name

    @property
    def last_name(self):
        return self.last_name

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def categories(self):
        return self.category_limits.all()

    def get_category_limit(self, category: str):
        category_to_get = self.category_limits.filter(category=category).first()
        return category_to_get

    def add_category_limit(self, category: str, limit: decimal):
        CategoryLimit.objects.create(parent_user=self, category=category, limit=limit)

    def delete_category_limit(self, category: str):
        category_limit_to_delete = self.category_limits.filter(
            category=category
        ).first()
        if category_limit_to_delete:
            category_limit_to_delete.delete()

    @property
    def all_transactions(self):
        return self.transactions.all()

    def delete_transaction(self, id: str):
        transaction_to_delete = self.transactions.filter(id=id).first()

    def add_transaction(
        self, id: str, amount: decimal, date: datetime.date, category: str
    ):
        Transaction.objects.create(
            parent_user=self, id=id, amount=amount, date=date, category=category
        )


class CategoryLimit(models.Model):
    parent_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="category_limits"
    )
    category = models.CharField(max_length=32)
    limit = models.DecimalField()


class Transaction(models.Model):
    parent_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="transactions"
    )
    id = models.CharField(max_length=16)
    amount = models.DecimalField()
    date = models.DateField()
    category = models.CharField(max_length=32)
