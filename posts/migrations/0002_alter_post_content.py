# Generated by Django 4.2.10 on 2024-07-23 01:00

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posts", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="content",
            field=models.CharField(blank=True),
        ),
    ]
