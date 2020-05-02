deploy:
	gcloud beta functions deploy redirectBySelector --trigger-http --runtime=nodejs10 --region asia-northeast1 --project sandbox-276004