# artplace

MongoDB + Python 3.12 development container

## Quick Start

```bash
# Build container
make build

# Run container (interactive)
make run

# Inside container: run your scripts
python example_script.py
```

## Windows (PowerShell)
```powershell
.\powershell\build.ps1
.\powershell\run.ps1
```

## Mac (Shell)
```
make build
make run
make shell
```

## If you already have a container running
'''
docker exec -it artplace-mongo-container bash
'''