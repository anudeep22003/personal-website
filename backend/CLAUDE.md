# Personal Website Backend

A FastAPI backend for a personal website built with Python 3.12.

## Project Structure

- **Framework**: FastAPI
- **Python Version**: 3.12
- **Package Manager**: uv
- **Configuration**: pyproject.toml

## Dependencies

### Production
- `fastapi>=0.116.1` - Modern web framework
- `pydantic>=2.11.7` - Data validation and parsing

### Development
- `mypy>=1.17.0` - Static type checking
- `ruff>=0.12.4` - Fast Python linter and formatter

## Development Principles
- premature optimization is the root of all evil
- write code for humans, not machines
- code should be readable and maintainable
- code should be flexible and extensible
- use existing packages when possible, don't reinvent the wheel
- less code is better than more code
- explicit is better than implici
- stack trace should read like a story
- code should be self-documenting
- function names should be descriptive
- use commennts sparingly, the code should be self-documenting
- use type hints as far as possible, but not beyond 2 attempts to fix the type error

## Development Commands

```bash
# Install dependencies
uv sync --dev

# Run type checking
uv run mypy .

# Run linting and formatting
uv run ruff check .
uv run ruff format .

# Auto-fix linting issues
uv run ruff check --fix .
```

## Code Quality Configuration

### MyPy
- Strict mode enabled
- Python 3.12 target
- Comprehensive type checking rules
- No implicit optionals
- Unused imports/casts warnings

### Ruff
- Target: Python 3.12
- Line length: 88 characters
- Comprehensive rule set including:
  - Pycodestyle (E/W)
  - Pyflakes (F)
  - Import sorting (I)
  - Bugbear (B)
  - Comprehensions (C4)
  - Pyupgrade (UP)
  - And many more for code quality

## Notes

- Configuration is stored in `pyproject.toml`
- Both mypy and ruff are configured with safe, strict defaults
- Ruff handles both linting and formatting