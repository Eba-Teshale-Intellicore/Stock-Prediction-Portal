from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only = True, min_length=8, style={'input_type': 'password'})
  class Meta:
    model = User
    fields = ['username', 'email', 'password']
  
  def create(self, validated_data):
    # user = User.objects.create_user(**validated_data) or 
    #Rule of Thumb
    # Use create_user() for normal users ✅
    # Use create_superuser() for admins ✅
    # Avoid using create() when creating users with passwords ❌
    # In most Django projects (signup, registration, authentication, REST APIs), you'll almost always use:

    # User.objects.create_user(...)
    user = User.objects.create_user(
      validated_data['username'],
      validated_data['email'],
      validated_data['password']
    )

    return user