FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED 1

# RUN mkdir /portfolio

WORKDIR /portfolio

COPY requirements.txt /portfolio/

RUN pip install -r requirements.txt

COPY . /portfolio/