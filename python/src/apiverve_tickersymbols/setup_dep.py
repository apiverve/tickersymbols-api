from setuptools import setup, find_packages

setup(
    name='apiverve_tickersymbols',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Ticker Symbols identifies what a ticker symbol is and where it trades. Look up a symbol to get every listing that carries it across the US and 18 international stock markets, cryptocurrencies, futures and currency pairs, or find a stock symbol by company name. Every result carries its name, market, exchange, security type and asset class; paid plans add FIGI identifiers, SEC CIK numbers and fuller search results.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/tickersymbols?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
