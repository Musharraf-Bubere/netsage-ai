from setuptools import setup, find_packages

with open("requirements.txt") as f:
    requirements = f.read().splitlines()

setup(
    name="netsage-ai",
    version="0.1.0",
    author="Musharraf Bubere",
    description="A modern network forensics tool designed for education.",

    packages=find_packages(),           # 1. Logic to find all code folders

    install_requires=requirements,      # 2. Logic to read from requirements.txt

    include_package_data=True,          # 3. Critical: This ensures HTML and CSS files are included in the install!

    python_requires=">=3.10",           # 4. which Python versions are supported
)